#Region ;**** Directives created by AutoIt3Wrapper_GUI ****
#AutoIt3Wrapper_UseX64=n
#AutoIt3Wrapper_Change2CUI=y
#EndRegion ;**** Directives created by AutoIt3Wrapper_GUI ****
#include <Debug.au3>
#include <WinAPI.au3>

;_DebugSetup("WinList autoit", False , 4, EnvGet( "Temp") & "\list-windows.log")

; #AutoIt3Wrapper_Au3Check_Parameters=-d -w 1 -w 2 -w 3 -w- 4 -w 5 -w 6 -w- 7
Opt("WinTextMatchMode", 4)
Local $searchTerm = ""
Local $term  = "."
if UBound($CmdLine) > 1 Then
$term= $CmdLine[1]
EndIf
$searchTerm ="[REGEXPTITLE:(?i)("&$term&")]"

;ConsoleWrite($searchTerm)
local $v = WinList($searchTerm)


;ConsoleWrite("windows: " & @CRLF)


ConsoleWrite("[" & @CRLF)
Local $eaten = 0

For $i = 1 to $v[0][0]
   Local $hwnd = $v[$i][1]
   Local $pid = WinGetProcess($hwnd)
   Local $title = $v[$i][0]
   Local $path = _ProcessGetLocation($pid)
   Local $exStyle = _WinAPI_GetWindowLong ($hwnd, $GWL_EXSTYLE)
   Local $wsExAppWindow = BitAND(WinGetState($hwnd), 2)
   Local $excluded = 0
   if ($title == "") or ($path == "") or (BitAND($exStyle,0x00000080 ) <> 0) or $wsExAppWindow ==0 Then ;$WS_EX_APPWINDOW    
    $excluded = 1
    ContinueLoop  
   EndIf

   if $eaten > 0 Then
	  	  ConsoleWrite(",")
   endif
   $eaten = $eaten + 1
   Local $index = $i
   ;if $eaten == 1  then
;	  $index = 999
 ;  EndIf
   Local $preJson = "{'pid': " & $pid & ", 'i': " & $index & ", 'hwnd': '" & $hwnd & "', 'processPath': '" & _SanitizeToken($path) & "', 'title':'" & _SanitizeToken($title) &  "', 'match': '"  & _SanitizeToken($title) & "', 'exstyle': " & $exStyle & ",'wsExAppWindow': " & $wsExAppWindow & ",'excluded': " & $excluded & "}"
	  Local $json = StringReplace( StringReplace( $preJson, "'", """"), "\", "\\")
   ConsoleWrite( _WinAPI_WideCharToMultiByte (  $json, 65001,1)	   & @CRLF)

 ; _DebugOut( $json )

   if $eaten > 20 then
	  ExitLoop
   EndIf

Next
;  _DebugOut( "----------------------------------------" )


ConsoleWrite("]" & @CRLF)


Func _SanitizeToken($token)
   return StringReplace(StringReplace($token, """", "`"), "'", "`")
EndFunc

Func _ProcessGetLocation($iPID)
    Local $aProc = DllCall('kernel32.dll', 'hwnd', 'OpenProcess', 'int', BitOR(0x0400, 0x0010), 'int', 0, 'int', $iPID)
    If $aProc[0] = 0 Then Return SetError(1, 0, '')
    Local $vStruct = DllStructCreate('int[1024]')
    DllCall('psapi.dll', 'int', 'EnumProcessModules', 'hwnd', $aProc[0], 'ptr', DllStructGetPtr($vStruct), 'int', DllStructGetSize($vStruct), 'int_ptr', 0)
    Local $aReturn = DllCall('psapi.dll', 'int', 'GetModuleFileNameEx', 'hwnd', $aProc[0], 'int', DllStructGetData($vStruct, 1), 'str', '', 'int', 2048)
    If StringLen($aReturn[3]) = 0 Then Return SetError(2, 0, '')
    Return $aReturn[3]
EndFunc