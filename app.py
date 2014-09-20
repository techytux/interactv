#------------------------------------------------------------------------------#
# Imports
#------------------------------------------------------------------------------#

import os
from flask import * # do not use '*'; actually input the dependencies
import logging
from logging import Formatter, FileHandler
import arte
from flask import stream_with_context
import mimetypes
import os
import re
#------------------------------------------------------------------------------#
# App Config
#------------------------------------------------------------------------------#

app = Flask(__name__)
app.config.from_object('config')
#db = SQLAlchemy(app)

# Automatically tear down SQLAlchemy
'''
@app.teardown_request
def shutdown_session(exception=None):
    db_session.remove()
'''

# Login required decorator
'''
def login_required(test):
    @wraps(test)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return test(*args, **kwargs)
        else:
            flash('You need to login first.')
            return redirect(url_for('login'))
    return wrap
'''
#------------------------------------------------------------------------------#
# Controllers
#------------------------------------------------------------------------------#

@app.route("/")
def index():
    videos = arte.get_arte_concert_videos()
    return render_template('index1.html', videos=videos)

@app.route("/staticplayer.html")
def staticvideoHtml():
    return render_template('staticplayer.html')

@app.route("/video/<program_id>")
def player_page(program_id):
    video = arte.get_arte_video_url(program_id)
    return render_template('player.html', video=video)

@app.route("/staticvideo")
def send_file_partial():
    """ 
        Simple wrapper around send_file which handles HTTP 206 Partial Content
        (byte ranges)
        TODO: handle all send_file args, mirror send_file's error handling
        (if it has any)
    """
    path = 'static/mov/interacTV.mp4'
    range_header = request.headers.get('Range', None)
    if not range_header: return send_file(path)
    
    size = os.path.getsize(path)    
    byte1, byte2 = 0, None
    
    m = re.search('(\d+)-(\d*)', range_header)
    g = m.groups()
    
    if g[0]: byte1 = int(g[0])
    if g[1]: byte2 = int(g[1])

    length = size - byte1
    if byte2 is not None:
        length = byte2 - byte1
    
    data = None
    with open(path, 'rb') as f:
        f.seek(byte1)
        data = f.read(length)

    rv = Response(data, 
        206,
        mimetype=mimetypes.guess_type(path)[0], 
        direct_passthrough=True)
    rv.headers.add('Content-Range', 'bytes {0}-{1}/{2}'.format(byte1, byte1 + length - 1, size))

    return rv

'''
@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/register")
def register():
    return render_template("register.html")
'''

# Error Handlers

@app.errorhandler(500)
def internal_error(error):
    #db_session.rollback()
    return render_template('500.html'), 500

@app.errorhandler(404)
def internal_error(error):
    return render_template('404.html'), 404

if not app.debug:
    file_handler = FileHandler('error.log')
    file_handler.setFormatter(Formatter('%(asctime)s %(levelname)s: %(message)s '
    '[in %(pathname)s:%(lineno)d]'))
    app.logger.setLevel(logging.INFO)
    file_handler.setLevel(logging.INFO)
    app.logger.addHandler(file_handler)
    app.logger.info('errors')

#------------------------------------------------------------------------------#
# Launch
#------------------------------------------------------------------------------#

# default  port
if __name__ == '__main__':
    app.run()


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)

