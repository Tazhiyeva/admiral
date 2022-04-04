import React from 'react'
import { IconComponentType, IconWrapperProps } from './interfaces'
import DevFamilyLogo from './DevFamilyLogo'
import DevFamilyLogoInversion from './DevFamilyLogoInversion'
import DevFamilyLogoInversionBW from './DevFamilyLogoInversionBW'
import Spinner from './SpinnerIcon'

const Icon = ({ name, ...props }: IconWrapperProps) => {
    let Component: IconComponentType
    Component = DevFamilyLogo

    switch (name) {
        case 'dev-family-logo': {
            Component = DevFamilyLogo
            break
        }
        case 'dev-family-logo-inversion': {
            Component = DevFamilyLogoInversion
            break
        }
        case 'dev-family-logo-inversion-bw': {
            Component = DevFamilyLogoInversionBW
            break
        }
        case 'spinner': {
            Component = Spinner
            break
        }
    }

    return <Component {...props} />
}

export default Icon