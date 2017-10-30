#AutoIt3Wrapper_Change2CUI=y
; #AutoIt3Wrapper_Au3Check_Parameters=-d -w 1 -w 2 -w 3 -w- 4 -w 5 -w 6 -w- 7
Opt("WinTextMatchMode", 4)
Local $term = $CmdLine[1]

Local $searchTerm ="[REGEXPTITLE:(?i)("&$term&")]"
;ConsoleWrite($searchTerm)
local $v = WinList($searchTerm)


;ConsoleWrite("windows: " & @CRLF)


ConsoleWrite("[" & @CRLF)
Local $limit = $v[0][0]
if $limit > 20 Then
	  $limit = 20
   EndIf


For $i = 1 to $limit
   Local $hwnd = $v[$i][1]
   Local $pid = WinGetProcess($hwnd)
   Local $preJson = "{'pid': " & $pid & ", 'i': " & $i& ", 'hwnd': '" & $hwnd & "', 'processPath': '" & _ProcessGetLocation($pid) & "', 'title':'" & WinGetTitle($hwnd) &  "', 'match': '"  & $v[$i][0] & "'}"
	  Local $json = StringReplace( StringReplace( $preJson, "'", """"), "\", "\\")
   ConsoleWrite(   $json	   & @CRLF)

   if $i < $limit Then
	  ConsoleWrite(",")
   EndIf

Next


ConsoleWrite("]" & @CRLF)



Func _ProcessGetLocation($iPID)
    Local $aProc = DllCall('kernel32.dll', 'hwnd', 'OpenProcess', 'int', BitOR(0x0400, 0x0010), 'int', 0, 'int', $iPID)
    If $aProc[0] = 0 Then Return SetError(1, 0, '')
    Local $vStruct = DllStructCreate('int[1024]')
    DllCall('psapi.dll', 'int', 'EnumProcessModules', 'hwnd', $aProc[0], 'ptr', DllStructGetPtr($vStruct), 'int', DllStructGetSize($vStruct), 'int_ptr', 0)
    Local $aReturn = DllCall('psapi.dll', 'int', 'GetModuleFileNameEx', 'hwnd', $aProc[0], 'int', DllStructGetData($vStruct, 1), 'str', '', 'int', 2048)
    If StringLen($aReturn[3]) = 0 Then Return SetError(2, 0, '')
    Return $aReturn[3]
EndFunc