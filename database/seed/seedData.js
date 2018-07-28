const { SidebarImg } = require('../models')


const SBIData = [
  {
    original: 'http://loremflickr.com/480/640/wolves'
  },
  // {
    // original: 'https://images.unsplash.com/photo-1532746154471-8dfe0e782a98?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7854a50859459287ec22f6d8f8a1750e&auto=format&fit=crop&w=934&q=80'
  // },
  {
    original: 'http://loremflickr.com/480/640/lion'
  },
  {
    original: 'http://loremflickr.com/480/640/forest'
  },
  {
    original: 'http://loremflickr.com/480/640/babes'
  },
  // {
  //   experience: 'wolfencounter',
  //   url: 'http://loremflickr.com/640/480/wolves'
  // },
  // {
  //   experience: 'wolfencounter',
  //   url: 'http://loremflickr.com/640/480/wolves'
  // },
  // {
  //   experience: 'wolfencounter',
  //   url: 'http://loremflickr.com/640/480/wolves'
  // },
  // {
  //   experience: 'wolfencounter',
  //   url: 'http://loremflickr.com/640/480/wolves'
  // },
  // {
  //   experience: 'wolfencounter',
  //   url: 'http://loremflickr.com/640/480/wolves'
  // },
  // {
  //   experience: 'wolfencounter',
  //   url: 'http://loremflickr.com/640/480/wolves'
  // },
]


SBIData.forEach((sidebarimg) => {
  new SidebarImg({
      original: sidebarimg.original,
      // url: sidebarimg.url
  }).save((err, newsidebarimg) => {
      if(err){console.error(err)}
      console.log('created :', newsidebarimg)
  })
})