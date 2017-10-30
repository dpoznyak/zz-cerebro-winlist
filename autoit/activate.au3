#AutoIt3Wrapper_Change2CUI=y
; #AutoIt3Wrapper_Au3Check_Parameters=-d -w 1 -w 2 -w 3 -w- 4 -w 5 -w 6 -w- 7
Opt("WinTextMatchMode", 4)
Local $term = $CmdLine[1]

WinActivate(HWnd($term))