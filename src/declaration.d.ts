import { AriaAttributes, DOMAttributes } from 'react'

declare module "react" {
    interface FormHTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        netlify?: boolean
    }
}