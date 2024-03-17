import Logger from '@kant2002-diia-inhouse/diia-logger'
import { HttpService } from '@kant2002-diia-inhouse/http'
import { mockClass } from '@kant2002-diia-inhouse/test'
import { HttpProtocol } from '@kant2002-diia-inhouse/types'

import { StrapiConfig } from '../../../src/interfaces'

export const logger = new (mockClass(Logger))()

export const strapiConfig: StrapiConfig = {
    isEnabled: false,
    host: '',
    port: 80,
    token: '',
}

export const httpService = new (mockClass(HttpService))(logger, HttpProtocol.Http)
