//your code here!
let ol = document.getElementById('infi-list')
let start = 1
let end = 10
function add(start,end){
for(let i=start;i<=end;i++){
	let li = document.createElement('li')
	li.textContent = `Item ${i}`
	ol.appendChild(li)
}
}
add(start,end)


ol.addEventListener('scroll',()=>{
	let totalheight = ol.scrollHeight
	let clientHeight = ol.clientHeight
	let scrolled = ol.scrollTop
	if(scrolled+clientHeight>=totalheight){
		start=end+1
		end = end+2
		add(start,end)
	}
})

