/*--Original source https://developers.google.com/youtube/iframe_api_reference--*/
/**
 * File: main.js
 * Type: Javascript component
 * Author: MICHI CHEN
 */
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var videoIdName = '7Y3ZRYQl4Qo';

function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		width: '100%',
		videoId: videoIdName,
		playerVars: {
			loop: 1,
			playlist: videoIdName,
			controls: 0,
			iv_load_policy:3,
			modestbranding:1,
			showinfo:0,
			autohide:0
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
};

function onPlayerReady(event) {
	event.target.playVideo();
};

function onPlayerStateChange(event) {
	event.target.mute();
};

$(document).ready(function() {
	$('#play').on('click', function() {
		player.playVideo();
	});
	$('#pause').on('click', function() {
		player.pauseVideo();
	});
	$('#stop').on('click', function() {
		player.stopVideo();
	});
	$('#soundOpen').click(function(){
		player.unMute();
	});
	$('#soundClose').click(function(){
		player.mute();
	});
});