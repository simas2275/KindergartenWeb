

import React from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import useGetVaikoLankomumoAdmin from "../../hooks/getVaikoLankomumoDataAdmin";
import { Card, Form, Col, Row, Spinner } from "react-bootstrap";
import { useQuery, useQueryClient } from "react-query";
const GetPirmoVaikoLankPirm = () => {
  const { status, data, isFetching, error } = useGetVaikoLankomumoAdmin();
  //   console.log(data)

  
  return (
    <div>
      {status === "loading" ? (
        <Spinner size="sm" animation="border" role="status">
          <span className="sr-only">Kraunasi...</span>
        </Spinner>
      ) : status === "error" ? (
        <span>Error:</span>
      ) : (
        data.vaikoDuom.map((lankomumas) => {
          console.log(lankomumas.userId);
          return (
            <div>
            <h6 key={lankomumas.userId} className="text-center">Pirm</h6>
              <BootstrapSwitchButton
                size="xs"
                id={lankomumas.userId}
                checked={lankomumas.Pirm_Pirmadienis}
                onlabel="O"
                offlabel="I"
                onstyle="outline-success"
              >
                  
                {/* <Form.Check
                  type="switch"
                  size="xs"
                  id={lankomumas.userId}
                  defaultChecked={lankomumas.Pirm_Pirmadienis}
                  onClick={() =>
                    toggle(lankomumas.Pirm_Pirmadienis, lankomumas.userId)
                  }
                /> */}
              </BootstrapSwitchButton>
            </div>
          );
        })
      )}
      {/* <BootstrapSwitchButton
        checked={true}
        onstyle="outline-success"
        offstyle="outline-danger"
        size="xs"
      /> */}
      {/* <Form.Check
                        type="switch"
                        id={vaikas.userId}
                        defaultChecked={vaikas.AdminConfirm}
                        onClick={() =>
                          toggle(vaikas.AdminConfirm, vaikas.userId)
                        }
                      /> */}
    </div>
  );
};

export default GetPirmoVaikoLankPirm;
