import React from 'react'
import EntryLine from './EntryLine'

function EntryLines({entries, deleteEntry}) {
  return (
    <>
        {
        entries.map(entrie => (
            <EntryLine key={entrie.id} {...entrie} deleteEntry={deleteEntry} />
        ))
        }
    </>
  )
}

export default EntryLines