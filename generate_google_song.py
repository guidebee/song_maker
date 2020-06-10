import music21.midi

google_mf = music21.midi.MidiFile()
google_mf.open('./google_sm.mid', 'rb')
google_mf.read()

first_track = google_mf.tracks[0]
note_track = google_mf.tracks[1]
header_midi_events = []
footer_midi_events = []
total_events = len(note_track.events)
header_midi_events.append(note_track.events[0])
header_midi_events.append(note_track.events[1])

footer_midi_events.append(note_track.events[total_events - 2])
footer_midi_events.append(note_track.events[total_events - 1])

print(header_midi_events)
print(footer_midi_events)

china_mf = music21.midi.MidiFile()
china_mf.open('./australi.mid', 'rb')

china_mf.read()
index = 0
first_track = china_mf.tracks[0]
for track in china_mf.tracks:

    if track.hasNotes():
        min_time = 1000000
        max_time = 0
        min_note = 10000
        max_note = 0
        out_mf = music21.midi.MidiFile()
        out_mf.tracks.append(first_track)
        # mt = music21.midi.MidiTrack(1)
        # out_mf.tracks.append(mt)
        # mt.events.append(header_midi_events[0])
        # mt.events.append(header_midi_events[1])
        index += 1
        # middle_events = []
        count_of_events = len(track.events) // 2
        song_name = ''
        total_time = 0
        times = []
        for i in range(count_of_events):
            delta_time_event = track.events[i * 2]
            note_event = track.events[i * 2 + 1]
            if note_event.type == 'SEQUENCE_TRACK_NAME':
                song_name = str(note_event.data.decode("utf-8")).lower()
            if delta_time_event.isDeltaTime() and (note_event.isNoteOn() or note_event.isNoteOff()):
                if min_time > delta_time_event.time and (delta_time_event.time != 0):
                    min_time = delta_time_event.time
                if max_time < delta_time_event.time:
                    max_time = delta_time_event.time

                if min_note > note_event.pitch:
                    min_note = note_event.pitch
                if max_note < note_event.pitch:
                    max_note = note_event.pitch
                    # print(note_event)
                total_time += delta_time_event.time
        # ratio = round(36000 / total_time, 3)
        # if ratio < 1:
        #     ratio = 1
        # print(f'min_time={min_time},max_time={max_time}')
        # print(f'total time={total_time}')
        # print(f'min_note={min_note},max_note={max_note}')
        # print(f'song name ={song_name}')
        # diff_note1 = 48 - min_note
        # diff_note2 = max_note - 83
        # for i in range(count_of_events):
        #     delta_time_event = track.events[i * 2]
        #     note_event = track.events[i * 2 + 1]
        #     if delta_time_event.isDeltaTime() and (note_event.isNoteOn() or note_event.isNoteOff()):
        #         dt = music21.midi.DeltaTime(mt)
        #         dt.time = int(delta_time_event.time * ratio * 3)
        #
        #         # dt.time = delta_time_event.time
        #         if note_event.velocity > 0:
        #             velocity = 127
        #         else:
        #             velocity = 0
        #         note = music21.midi.MidiEvent(type=note_event.type, track=mt, channel=2)
        #         # if velocity > 0:
        #         #     note = music21.midi.MidiEvent(type='NOTE_ON', track=mt, channel=2)
        #         # else:
        #         #     note = music21.midi.MidiEvent(type='NOTE_OFF', track=mt, channel=2)
        #         if diff_note1 > 0:
        #             note.pitch = note_event.pitch + 12
        #         elif diff_note2 > 0:
        #             note.pitch = note_event.pitch - 12
        #         else:
        #             note.pitch = note_event.pitch
        #         note.pitch = note_event.pitch
        #         note.velocity = velocity
        #         if (note.pitch > 47) and (note.pitch <= 83):
        #             middle_events.append(dt)
        #             middle_events.append(note)
        #
        # for event in middle_events:
        #     mt.events.append(event)
        # mt.events.append(footer_midi_events[0])
        # mt.events.append(footer_midi_events[1])
        out_mf.tracks.append(track)

        out_mf.open(f'./{index}-{song_name}.mid', 'wb')
        out_mf.ticksPerQuarterNote = china_mf.ticksPerQuarterNote

        out_mf.write()
        out_mf.close()
