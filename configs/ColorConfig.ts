export type ColorConfig = {
  name?: string
  light?: string
  main: string
  dark?: string
}

// Primary color config object
const Configs ={
  appName: 'primary-1',
  title: 'primary-1',
  description: 'primary-1',
  PrimaryColor: '#33A752',
  SecondariColor: '#DF7413',
  btnColor   :' #675DD8',
  VertClair  :' #A8D5BA',
  VertFonce  :' #2F4F4F',
  
  BeigeSable :' #D2B48C',
  BrunMoyen  :' #8B4513',
  BrunFonce  :' #5D4037',

  BleuPastel :' #ADD8E6',
  BleuClair  :' #87CEEB',
  BleuFonce  :' #4682B4',

  DarkCol    : ' #001F3F'
}

// Primary color config object
const ColorConfigs: ColorConfig[] = [
  {
    name: 'primary-1',
    light: '#8F85F3',
    main: '#7367F0',
    dark: '#675DD8'
  },
  {
    name: 'primary-2',
    light: '#4EB0B1',
    main: '#0D9394',
    dark: '#096B6C'
  },
  {
    name: 'primary-3',
    light: '#FFC25A',
    main: '#FFAB1D',
    dark: '#BA7D15'
  },
  {
    name: 'primary-4',
    light: '#F0718D',
    main: '#EB3D63',
    dark: '#AC2D48'
  },
  {
    name: 'primary-5',
    light: '#5CAFF1',
    main: '#2092EC',
    dark: '#176BAC'
  }
]

export default ColorConfigs
