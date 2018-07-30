const { SidebarImg } = require('../models')


const vidsidebarimg = {
  experience: 'wolfencounter',
  // thumbnail: `${PREFIX_URL}4v.jpg`,
  original: `https://i.pinimg.com/originals/76/19/44/7619448dbe56dfb24d7362db904cd82d.jpg`,
  embedUrl: 'https://www.youtube.com/embed/tRTTMNr10u8',
  // description: 'Render custom slides within the gallery',
  // renderItem: this._renderVideo.bind(this)
};

const SBIData = [
  {
    experience: 'wolfencounter',
    original: 'http://loremflickr.com/480/640/wolves'
  },
  // {
    // original: 'https://images.unsplash.com/photo-1532746154471-8dfe0e782a98?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7854a50859459287ec22f6d8f8a1750e&auto=format&fit=crop&w=934&q=80'
  // },
  {
    experience: 'wolfencounter',
    original: 'http://loremflickr.com/480/640/lion'
  },
  {
    experience: 'wolfencounter',
    original: 'http://loremflickr.com/480/640/forest'
  },
  {
    experience: 'wolfencounter',
    original: 'http://loremflickr.com/480/640/animals'
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

new SidebarImg({
  experience: vidsidebarimg.experience,
  original: vidsidebarimg.original,
  embedUrl: vidsidebarimg.embedUrl,
  // url: sidebarimg.url
}).save((err, newsidebarimg) => {
  if(err){console.error(err)}
  console.log('created :', newsidebarimg)
});

SBIData.forEach((sidebarimg) => {
  new SidebarImg({
      experience: sidebarimg.experience,
      original: sidebarimg.original,
      // url: sidebarimg.url
  }).save((err, newsidebarimg) => {
      if(err){console.error(err)}
      console.log('created :', newsidebarimg)
  })
})