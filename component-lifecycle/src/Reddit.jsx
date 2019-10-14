import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Reddit extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			posts: []
		};
	}

	componentDidMount() {
		const { subreddit } = this.props;
		fetch(`https://www.reddit.com/r/${subreddit}.json`)
			.then((response) => {
				this.setState({ isLoading: !this.state.isLoading });
				if (response.ok) {
					return response.json();
				}
				throw new Error('Request Failed');
			})
			.then((json) => {
				const posts = json.data.children.map((obj) => obj.data);
				this.setState({ posts });
			}).catch((error) => {
				console.error(error);
			});
		this.setState({ isLoading: !this.state.isLoading });
	}

	render() {
		const { isLoading, posts } = this.state;
		const { subreddit } = this.props;
		return (
			<div>
				<h1>
					{`/r/${subreddit}`}
				</h1>
				{isLoading ? 'Loading...' : (
					<ul>
						{posts.map((post) => (
							<li key={post.id}>{post.title}</li>
						))}
					</ul>)}
			</div>
		);
	}
}
