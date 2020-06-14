import music21.midi
from music21 import graph

china_mf = music21.midi.MidiFile()
china_mf.open('./1-piano.mid', 'rb')
china_mf.read()
china_mf.close()

s = music21.midi.translate.midiFileToStream(china_mf)

note_values = {
    'C': 0,
    'C#': 0,
    'D': 2,
    'D#': 2,
    'E': 4,
    'E-': 4,
    'F': 5,
    'F#': 5,
    'G': 7,
    'G#': 7,
    'A': 9,
    'A#': 9,
    'B': 11,
    'B-': 11
}

map_to_google_sm = {
    'C3': 2,
    'D3': 3,
    'E3': 4,
    'F3': 5,
    'G3': 6,
    'A3': 7,
    'B3': 8,

    'C4': 9,
    'D4': 10,
    'E4': 11,
    'F4': 12,
    'G4': 13,
    'A4': 14,
    'B4': 15,

    'C5': 16,
    'D5': 17,
    'E5': 18,
    'F5': 19,
    'G5': 20,
    'A5': 21,
    'B5': 22,

    'C6': 23,
    'D6': 24,
    'E6': 25,
    'F6': 26,
    'G6': 27,
    'A6': 28,
    'B6': 29,

    'C7': 30,
    'D7': 31,
    'E7': 32,
    'F7': 33,
    'G7': 34,
    'A7': 35,
    'B7': 36,

}

coords = set()


def get_google_note(y):
    if y in map_to_google_sm:
        return map_to_google_sm[y]
    return -1


def get_note_value(note):
    if note.name in note_values:
        n = note_values[note.name]
        octave = note.octave
        return n + octave * 12
    return -1


def get_y_coords(n):
    y_coords = []
    if n.isChord:
        for note in n.notes:
            y_coords.append(note.name.replace('-', '').replace('#', '') + str(note.octave))
    elif n.isNote:
        y_coords.append(n.name.replace('-', '').replace('#', '') + str(n.octave))

    return y_coords


s = s.chordify()
s.show('text')
all_notes = s.flat.notesAndRests
min_offset = 1000000.0
max_offset = 0
previous_offset = 0
for n in all_notes:
    if not n.isRest:
        x = n.offset
        delta_offset = x - previous_offset
        previous_offset = x
        if max_offset < delta_offset:
            max_offset = delta_offset
        if (min_offset > delta_offset) and (delta_offset > 0.0001):
            min_offset = delta_offset

scale = int(max_offset / min_offset)*2
max_x = 0
min_x = 10000

print(f"scale={scale}")
for n in all_notes:
    if not n.isRest:
        x = int(n.offset * scale)
        # print(f'{x}:{n}')
        if max_x < x:
            max_x = x
        if min_x > x:
            min_x = x
        y_coords = get_y_coords(n)
        if len(y_coords) > 0:
            for y in y_coords:
                coords.add((x, y))

coords = sorted(coords, key=lambda x: x[0])
print(coords)
new_coords = []

for (x, c) in coords:
    google_note = get_google_note(c)
    if google_note > 0:
        new_coords.append((int((x - min_x) / (scale)), google_note))

print(new_coords)
print('[', sep='')
for (x, y) in new_coords:
    print(f'{{x:{x},y:{y}}},', end='')

print('\n]')

max_x = 0
min_x = 10000
for (x, y) in new_coords:
    if max_x < x:
        max_x = x
    if min_x > x:
        min_x = x
print(f'min_x={min_x},max_x={max_x}')
bar = int((max_x - min_x) / 16)
print(f'bar={bar}')
