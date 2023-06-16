
## --@STCIssue Too long names
```txt
upscayl_4x_RealESRGAN_General_x4_v3
upscayl_4x_remacri
upscayl_4x_realesrgan-x4plus-anime
upscayl_4x_realesrgan-x4plus


_upscayl_4x_RealESRGAN_General_x4_v3
_upscayl_4x_realesrgan-x4plus-anime
_upscayl_4x_realesrgan-x4plus
_upscayl_4x_remacri
_upscayl_4x_ultramix_balanced
_upscayl_4x_ultrasharp

```

* --@a Substitute the above by

|       |       |       |
|  ---  |  ---  |  ---  |
|   upscayl_4x_RealESRGAN_General_x4_v3    |       |       |
|   upscayl_4x_remacri    |       |       |
|  upscayl_4x_realesrgan-x4plus-anime     |       |       |
|  upscayl_4x_realesrgan-x4plus     |       |       |

# --@a OR: 

|       |       |       |
|  ---  |  ---  |  ---  |
|   _upscayl_4x_realesrgan    |   __x    |       |
|   x4plus    |  4     |       |
|   anime    |   a    |       |
| Example: | | |
|upscayl_4x_realesrgan-x4plus-anime |  | x4a |
|upscayl_4x_realesrgan-x4plus |  | x4 |


# --@Observation while running

```log
 Upscayl Command:  [
  '-i',
  'B:\\____UPSCALED_TMP_OUT__2306\\__DEVTESTS__\\Billyellia__no_2crp.jpeg',
  '-o',  'B:\\____UPSCALED_TMP_OUT__2306\\__DEVTESTS__\\Billyellia__no_2crp_upscayl_4x_realesrgan-x4plus-anime.png',
  '-s',
  '4',
  '-m',
  'C:\\usr\\src\\_giar\\gia-upscayl\\resources\\models',
  '-n',
  'realesrgan-x4plus-anime',
  '-g',
  '0',
  '-f',
  'png'
```

```txt
# Array

 0: '-i',
 1: 'B:\\__DEVTESTS__\\Billyellia__no_2crp.jpeg',
 2: '-o',  
 3: 'B:\\_2crp_upscayl_4x_realesrgan-x4plus-anime.png',
 4: '-s',
 5: '4',
 6: '-m',
 7: 'C:\\[...]\\resources\\models',
 8: '-n',
 9: 'realesrgan-x4plus-anime',
 10: '-g',
 11: '0',
 12: '-f',
 13: 'png'

  ```

```log
16:05:20.907 ΓÇ║ ≡ƒöÇ Model changed:  realesrgan-x4plus-anime
16:05:20.911 ΓÇ║ ≡ƒöÇ Setting model to realesrgan-x4plus-anime
```