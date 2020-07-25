# cross-echo

Cross platform echo command

### Powershell/Powershell Core and encoding

The output can be garbled if the Powershell's encoding is not set to `UTF8`.
For interpretation of the escaped characters with `\0nnn`, `\nnn` and `\xnn`, to use extended ASCII characters, since neither Powershell's `UTF8` or `ASCII` do not support them, it is necessary to redirect the output. Although a sequence of bytes from extended ASCII characters having an equivalent in `UTF8` is fine.

#### Setting encoding in Powershell

```powershell
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
```
