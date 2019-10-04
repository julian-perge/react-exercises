function handleAction(event) {
	// console.log('Child did:', event);
}
function Parent() {
	return <Child onAction={handleAction} />;
}
