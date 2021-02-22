from flask import Flask, jsonify, request

# Init app
app = Flask(__name__)


@app.route('/api/lyrics', methods=['POST'])
def post():
    request_data = request.get_json()
    lyrics = request_data.get('lyrics')
    array_of_lyrics = lyrics.split('\n')

    array_no_chords = []
    list_of_chords = ['Em', 'G', 'D', 'A']

    for row in array_of_lyrics:
        if not any(chord in row for chord in list_of_chords):
            array_no_chords.append(row)

    lyrics_no_chords = '\n'.join(array_no_chords)

    return jsonify({'lyrics': lyrics_no_chords})


# Run Server
if __name__ == '__main__':
    app.run(debug=True)
