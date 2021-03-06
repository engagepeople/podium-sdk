import {IPodiumPromise, ITermsAccept} from '../../types'
import {Resource} from '../Podium/Resource'
import {Settings} from '../Podium/Settings'

export class Terms extends Resource {

    constructor(settings: Settings) {
        super(settings)
        this.SetResource('terms')
    }

    public Accept(termsId: number): IPodiumPromise<ITermsAccept> {
        return this.PostRequest<ITermsAccept>({
            terms_id : termsId,
        })
    }

}
