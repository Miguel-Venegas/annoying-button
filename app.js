const btn = document.querySelector('button');

btn.addEventListener('mouseover', function(){
	console.log('it is working');
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);

	btn.style.left = `${width}px`;
	btn.style.top = `${height}px`;
});

btn.addEventListener('click', function(){
	console.log('you got me!');
	btn.innerHTML = 'You got me!';
	document.body.style.backgroundColor = 'green';
});

