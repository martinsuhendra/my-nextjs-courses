import qs from 'qs'

export const homepageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        'layout.hero-section': {
          populate: '*',
        },
      },
    },
  },
})
