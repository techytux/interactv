from requests_oauthlib import OAuth2Session
import requests, json

arte_client_id = '54170bf33b78248f66681914_2dy4hjxvrjk0ow4o44wocccs4cgossok84k8ogso0wcoc80sss'
arte_client_secret = '3dh1e18ltjok44w48os48gwg0gok040c80scswk80ogcg40os8'


arte_get_token_url = 'https://api.arte.tv/api/oauth/v2/token?client_id=%s&client_secret=%s&grant_type=client_credentials' % (arte_client_id, arte_client_secret)





def get_arte_auth_token():
	arte_token = requests.get(arte_get_token_url)
	arte_access_token = arte_token.json()['access_token']
	return arte_access_token

def get_arte_concert_videos():
	arte_access_token = get_arte_auth_token()
	arte_api_concert_url = 'https://api.arte.tv/api/opa/v2/videos?platform=ALW&language=de&access_token=%s' % arte_access_token
	arte_videos = requests.get(arte_api_concert_url)
	return arte_videos.json()['videos']

def get_arte_video_url(programId):
	print programId
	arte_access_token = get_arte_auth_token()
	arte_player_url = 'https://api.arte.tv/api/opa/v2/videoStreams?programId=%s&reassembly=A&platform=ALW&channel=DE&language=de&kind=SHOW&access_token=%s' % (programId, arte_access_token)
	arte_player_html_request = requests.get(arte_player_url)
	print arte_player_html_request.json().keys()
	video_list = arte_player_html_request.json()['videoStreams']
	video_data = video_list[0]

	for video in video_list:
		if video['quality'] == "HQ":
			video_data = video

	return video_data