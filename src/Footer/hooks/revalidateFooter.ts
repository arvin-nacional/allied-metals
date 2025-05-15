import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateFooter: GlobalAfterChangeHook = ({ doc, req }) => {
  try {
    // Make sure we have the necessary properties before proceeding
    if (req?.payload && req?.context && !req?.context?.disableRevalidate) {
      req.payload.logger.info(`Revalidating footer`)
      revalidateTag('global_footer')
    }
  } catch (error) {
    // If there's any error in revalidation, log it but don't fail
    if (req?.payload) {
      req.payload.logger.error(`Error revalidating footer: ${error}`)
    } else {
      console.error(`Error revalidating footer: ${error}`)
    }
  }

  return doc
}
