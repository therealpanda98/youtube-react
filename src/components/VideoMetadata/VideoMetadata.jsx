import React from 'react';
import Rating from '../Rating/Rating';
import { Button, Divider, Icon } from 'semantic-ui-react';
import './VideoMetadata.scss';

const VideoMetadata = (props) => {
	let viewCount = 0;

	if (props.viewCount) {
		viewCount = Number(props.viewCount).toLocaleString();
	}

	return (
		<div className='video-metadata'>
			<h3>Video title</h3>
			<div className='video-stats'>
				<span>{viewCount} views</span>
				<div className='video-actions'>
					<Rating likeCount={100} dislikeCount={10} />
					<Button basic icon labelPosition='left'>
						<Icon name='share' />
						Share
					</Button>
					<Button basic icon>
						<Icon name='add circle' />
					</Button>
					<Button basic icon>
						<Icon name='ellipsis horizontal' />
					</Button>
				</div>
			</div>
			<Divider />
		</div>
	);
};

export default VideoMetadata;
