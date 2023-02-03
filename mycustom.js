let banner_imgs = document.querySelectorAll('#banner-area .owl-theme.owl-carousel .item img')
banner_imgs.forEach(img=>{
	img.style.cssText = `
		// width: 100vw;
		height: 400px
	`
})