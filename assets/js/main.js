function triggerVideo(trigger){
	const container = trigger.parentElement
	const iframe = $(trigger).siblings('iframe')[0]
	const videoSource = iframe.getAttribute('data-src')

	container.classList.add('active')
	iframe.setAttribute('autoplay', 1)
	iframe.setAttribute('src', videoSource)
}