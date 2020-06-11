import music21.midi
from music21 import graph

china_mf = music21.midi.MidiFile()
china_mf.open('./australi.mid', 'rb')
china_mf.read()
china_mf.close()

s = music21.midi.translate.midiFileToStream(china_mf)

# s.show('text')
s.chordify()
all_notes = s.flat.notesAndRests
for n in all_notes:
    print(f'{n.offset}:{n}')
