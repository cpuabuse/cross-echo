# cross-echo

Cross platform echo command

## Terminal and encoding

Depending on the terminal and encoding, interpretation of the escaped characters with `\0nnn`, `\nnn` and `\xnn` for extended ASCII characters the output might be replaced with other printable characters (Powershell, Windows Powershell Core, Windows Command Line). Although a sequence of bytes from extended ASCII characters representing a character in `UTF8` is fine. This might be fixed with process output redirection, or using a third-party terminal.

### Setting encoding in Powershell to UTF8

```powershell
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
```

## Node version

Minimum version is `11.0.0`.
