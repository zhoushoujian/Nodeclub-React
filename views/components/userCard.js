import React, { useEffect } from 'react';

const UserCard = (props) => {
	const { current_user, csrf } = props

	useEffect(() => {
		if(current_user){
			$(document).ready(function () {
				$('.follow_btn').click(function () {
					var $me = $(this);
					var action = $me.attr('action');
					var params = {
						follow_id: current_user._id,
						_csrf: csrf
					};
					$.post('/user/' + action, params, function (data) {
						if (data.status === 'success') {
							var $btns = $('.follow_btn');
							if (action === 'follow') {
								$btns.html('取消关注');
								$btns.attr('action', 'un_follow');
							} else {
								$btns.html('加入关注');
								$btns.attr('action', 'follow');
							}
							$btns.toggleClass('btn-success');
						}
					}, 'json');
				});
			});
		}
	}, [])

	const escapeSignature = (signature) => {
		return signature.split('\n').map(function (p) {
			return _.escape(p);
		}).join('<br>');
	}

  return (
		<div className='user_card'>
  		<div>
  			<a className='user_avatar' href={`/user/${current_user.loginname}`}>
    			<img src={current_user.avatar} title={current_user.loginname} />
  			</a>
  			<span className='user_name'>
					<a className='dark' href={`/user/${current_user.loginname}`}>{current_user.loginname}</a>
				</span>
  			<div className='board clearfix'>
    			<div className='floor'>
      			<span className='big'>积分: {current_user.score} </span>
    			</div>
  			</div>
  			<div className="space clearfix"></div>
  			<span className="signature">
					{current_user.signature ?	escapeSignature(current_user.signature) : ' “这家伙很懒，什么个性签名都没有留下。“'}
  			</span>
  		</div>
		</div>
  );
};

export default UserCard
