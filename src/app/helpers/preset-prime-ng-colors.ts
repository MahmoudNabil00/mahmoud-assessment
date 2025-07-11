import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';


const primaryColor : string =  getComputedStyle(document.documentElement).getPropertyValue('--m-color-primary').trim();
const lightPrimaryColor : string =  getComputedStyle(document.documentElement).getPropertyValue('--m-color-primary-light').trim();

export const customPresetColors = definePreset(Aura, {
    semantic: {
        primary: {
            // 50: '{zinc.50}',
            // 100: '{zinc.100}',
            // 200: '{zinc.200}',
            // 300: '{zinc.300}',
            // 400: '{zinc.400}',
            // 500: '{zinc.500}',
            // 600: '{zinc.600}',
            // 700: '{zinc.700}',
            // 800: '{zinc.800}',
            // 900: '{zinc.900}',
            // 950: '{zinc.950}',
        },
        colorScheme: {
            light: {
                primary: {
                    color: primaryColor,
                    // inverseColor: '#ffffff',
                    hoverColor: lightPrimaryColor,
                    // activeColor: '{zinc.800}'
                },
                surface: {
                    // 950: '{zinc.950}',
                },
                highlight: {
                    background: primaryColor,
                    focusBackground: '{zinc.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                }
            },
            dark: {
                primary: {
                    color: primaryColor,
                    // inverseColor: '#ffffff',
                    hoverColor: lightPrimaryColor,
                    // activeColor: '{zinc.800}'
                },
                surface: {
                    950:  '#1f1d2b', //--m-bg-1
                    900:  '#252836', //--m-bg-2
                    800:  '#4b5563',
                },
                highlight: {
                    background: primaryColor,
                    focusBackground: '{zinc.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                }
            }
        }
    }
});