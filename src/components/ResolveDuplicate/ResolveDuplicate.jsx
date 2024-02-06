import React, { useEffect, useState } from "react";

let selected = "bg-green-100 border-spacing-y-96";
let notSelected = "bg-red-100 line-through text-red-500";

const ResolveDuplicate = (props) => {
  let cleanData = {};

  const [source, setSource] = useState(null);
  const [inputs, setInputs] = useState(cleanData);

  useEffect(() => {
    props.entries.data.map((ent) =>
      ent.details.length === 2
        ? (cleanData[ent.id] = [ent.details[0].source, ent.details[1].source])
        : (cleanData[ent.id] = [ent.details[0].source])
    );
    setInputs(cleanData);
  }, []);

  const selectInput = (id, source) => {
    // console.log("Hello world");
  };

  return (
    <React.Fragment>
      <h1>{source}</h1>
      <table className="border-collapse w-3/4 bg-gray-100 h-40 overflow-y-auto rounded-lg">
        <thead>
          <tr className="[&>*]:p-2 text-left text-gray-500">
            <td></td>
            <td>Source</td>
            <td>email</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>No.</td>
          </tr>
        </thead>
        <tbody>
          {props.entries.data.map((e) => {
            console.log(e);
            return (
              <React.Fragment>
                {e.details.length === 2 ? (
                  <React.Fragment>
                    <tr className={`[&>*]:p-2 ${selected}`}>
                      <td>
                        <input
                          type="radio"
                          name={e.id}
                          value="user"
                          defaultChecked
                        />
                      </td>
                      <td>
                        <div
                          className={
                            "text-xs inline-block py-2 px-3 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-300 text-gray-700 rounded-full"
                          }
                        >
                          {e.details[0].source}
                        </div>
                      </td>
                      <td>{e.details[0].cells.email}</td>
                      <td>{e.details[0].cells.first_name}</td>
                      <td>{e.details[0].cells.last_name}</td>
                      <td>{e.details[0].cells.id}</td>
                      {console.log(e.details[0].cells)}
                    </tr>
                    <tr
                      className={`border-spacing-x-0 [&>*]:p-2 ${notSelected}`}
                    >
                      <td>
                        <input type="radio" name={e.id} value="system" />
                      </td>
                      <td>
                        <div
                          className={
                            "text-xs inline-block py-2 px-3 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-300 text-gray-700 rounded-full"
                          }
                        >
                          {e.details[1].source}
                        </div>
                      </td>
                      <td>{e.details[1].cells.email}</td>
                      <td>{e.details[1].cells.first_name}</td>
                      <td>{e.details[1].cells.last_name}</td>
                      <td></td>
                    </tr>
                    <br />
                  </React.Fragment>
                ) : (
                  <tr className={`[&>*]:p-2 ${selected}`}>
                    <td>
                      <input
                        type="radio"
                        name={e.id}
                        value="system"
                        defaultChecked
                      />
                    </td>
                    <td>
                      <div className="text-xs inline-block py-2 px-3 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-300 text-gray-700 rounded-full">
                        {e.details[0].source}
                      </div>
                    </td>
                    <td>{e.details[0].cells.email}</td>
                    <td>{e.details[0].cells.first_name}</td>
                    <td>{e.details[0].cells.last_name}</td>
                    <td></td>
                  </tr>
                )}
                {/* <tr className={`border-b-[2rem] border-white ${notSelected}`}>
                                        <td>
                                            <input type="radio" name={e.id} value="user" onChange={selectInput(e.id, e.source)} />
                                        </td>
                                        <td>
                                            <div className={"text-xs inline-block py-2 px-3 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-300 text-gray-700 rounded-full"}>
                                                {e.details[1].source}
                                            </div>
                                        </td>
                                        <td>{e.details[1].email}</td>
                                        <td>{e.details[1].first_name}</td>
                                        <td>{e.details[1].last_name}</td>
                                        <td></td>
                                    </tr> */}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ResolveDuplicate;
