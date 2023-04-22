
const MusicTable = (props) => {

    return ( 
        <table className="table">
        <thead>
          <tr>
            <th>title</th>
            <th>album</th>
            <th>artist</th>
            <th>genre</th>
            <th>release_date</th>

          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry, index)=> {
            return (
              <tr key={index}> {/* if you swap this out for date that will give us the date = bonus question */}
                <td>{index + 1}</td>
                <td>{entry.title}</td>
                <td>{entry.album}</td>
                <td>{entry.artist}</td>
                <td>{entry.genre}</td>
                <td>{entry.release_date}</td>
              </tr>
            )
          })}
    
        </tbody>
      </table>
     );
}
 
export default MusicTable;



{/*Copied DisplayedEntries component into MusicTable component to see if this 
will generate the table  */}