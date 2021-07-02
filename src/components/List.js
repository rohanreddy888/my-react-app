import { LinearProgress, Paper } from "@material-ui/core";
import React from "react";

function List({ loading, contacts }) {
  return (
    <Paper
      style={{
        margin: "20px auto",
        padding: "20px",
        maxWidth: "350px",
        position: "relative",
        backgroundColor: "pink",
      }}
    >
      {loading ? (
        <LinearProgress />
      ) : (
        contacts.map((contact) => {
          return (
            <div key={contact.id} style={{ display: "flex" }}>
              <div>
                  <img src="{contact.url}" alt="" width="100"/>
                <h4>
                  {contact.name} {contact.type}
                </h4>
              </div>
            </div>
          );
        })
      )}
    </Paper>
  );
}

export default List;
