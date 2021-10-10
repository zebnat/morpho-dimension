module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'ui-sans-serif', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'morpho-pattern': "url('morpho-pattern.png')"
      },
      colors: {
        // Default
        primary_default: '#06A6DB',
        primary_default_1: '#51BCE0',
        primary_default_2: '#26B0DD',
        primary_default_3: '#0381AA',
        primary_default_4: '#02607F',

        secondary_default: '#153AE1',
        secondary_default_1: '#6077E4',
        secondary_default_2: '#3856E2',
        secondary_default_3: '#0928B7',
        secondary_default_4: '#081F8B',

        secondary2_default: '#00E64E',
        secondary2_default_1: '#4EE983',
        secondary2_default_2: '#21E764',
        secondary2_default_3: '#00C342',
        secondary2_default_4: '#009532',

        complementary_default: '#FF8300',
        complementary_default_1: '#FFAD56',
        complementary_default_2: '#FF9424',
        complementary_default_3: '#FF8300',
        complementary_default_4: '#CC6800',
        
        // Cherry Abby

        primary_cherryabby: '#D45DA8',
        primary_cherryabby_1: '#F3B8DD',
        primary_cherryabby_2: '#E585C1',
        primary_cherryabby_3: '#C23C90',
        primary_cherryabby_4: '#B01C79',

        secondary_cherryabby: '#FA6D77',
        secondary_cherryabby_1: '#FEBFC4',
        secondary_cherryabby_2: '#FC939A',
        secondary_cherryabby_3: '#F24B58',
        secondary_cherryabby_4: '#DC2230',

        secondary2_cherryabby: '#965ABF',
        secondary2_cherryabby_1: '#D7B7EE',
        secondary2_cherryabby_2: '#B683D8',
        secondary2_cherryabby_3: '#7B3BA6',
        secondary2_cherryabby_4: '#671F97',

        complementary_cherryabby: '#CAF36A',
        complementary_cherryabby_1: '#E9FCBE',
        complementary_cherryabby_2: '#D9F890',
        complementary_cherryabby_3: '#B9E949',
        complementary_cherryabby_4: '#9FD421',

        // MilerTheme

        primary_milertheme: '#57D93C',
        primary_milertheme_1: '#9CEE8B',
        primary_milertheme_2: '#75E35E',
        primary_milertheme_3: '#38CF18',
        primary_milertheme_4: '#21A406',

        secondary_milertheme: '#2FA998',
        secondary_milertheme_1: '#7FD9CC',
        secondary_milertheme_2: '#4FC0B0',
        secondary_milertheme_3: '#129C89',
        secondary_milertheme_4: '#047B6B',

        secondary2_milertheme: '#BFF243',
        secondary2_milertheme_1: '#DBF992',
        secondary2_milertheme_2: '#CCF566',
        secondary2_milertheme_3: '#AEEA1B',
        secondary2_milertheme_4: '#AEEA1B',

        complementary_milertheme: '#F74455',
        complementary_milertheme_1: '#FC939D',
        complementary_milertheme_2: '#F96775',
        complementary_milertheme_3: '#F01C30',
        complementary_milertheme_4: '#BE0718',

        
        // MilerTheme2

        primary_milertheme2: '#59C05F',
        primary_milertheme2_1: '#59C05F',
        primary_milertheme2_2: '#83D788',
        primary_milertheme2_3: '#37A53E',
        primary_milertheme2_4: '#1D8A24',

        secondary_milertheme2: '#459094',
        secondary_milertheme2_1: '#A7D7D9',
        secondary_milertheme2_2: '#6FB2B5',
        secondary_milertheme2_3: '#2B7B7F',
        secondary_milertheme2_4: '#17666A',

        secondary2_milertheme2: '#2B7B7F',
        secondary2_milertheme2_1: '#E5F8BF',
        secondary2_milertheme2_2: '#D1F293',
        secondary2_milertheme2_3: '#96C341',
        secondary2_milertheme2_4: '#77A322',

        complementary_milertheme2: '#F47471',
        complementary_milertheme2_1: '#FFC5C4',
        complementary_milertheme2_2: '#FF9E9B',
        complementary_milertheme2_3: '#D24946',
        complementary_milertheme2_4: '#B02925',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
