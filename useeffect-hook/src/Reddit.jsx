import React, { useEffect, useState } from 'react';

export default function Reddit({ subreddit }) {
	// Initialize state to hold the posts
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// Fetch the data when the component mounts
		fetch(`https://www.reddit.com/r/${subreddit}.json`)
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				throw new Error('No JSON returned');
			})
			.then((json) =>
				// Save the posts into state
				setPosts(json.data.children.map((c) => c.data))
			)
			.catch((error) => {
				return 'NOT VALID';
			});
	}, [subreddit, setPosts]);

	return (
		<ol>
			{posts.map((post) => (
				<li>
					<a href={post.url} key={post.id} style={{ display: 'block' }}>
						{post.title}
					</a>
				</li>
			))}
		</ol>
	);
}
