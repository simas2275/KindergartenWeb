import React from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import useUpdateKetv from "../../hooks/pirmoVaikoLankomumoHooks/1VaikoKetv";
import useGetVaikoLankomuma from "../../hooks/pirmoVaikoLankomumoHooks/getVaikoLankomuma";
import { Card, Form, Col, Row, Spinner } from "react-bootstrap";
import { useQuery, useQueryClient } from "react-query";
const Pirmo_VaikoLankomumoKetv = () => {
  const { status, data, isFetching, error } = useGetVaikoLankomuma();
  //   console.log(data)
  const { mutate } = useUpdateKetv();
  const queryClient = useQueryClient();

  const toggle = async (Pirm_Ketvirtadienis, userId) => {
    await mutate(userId);
    await queryClient.invalidateQueries("Lankomumas");
    await queryClient.invalidateQueries("Lankomumas");
    await queryClient.invalidateQueries("Lankomumas");
    await queryClient.invalidateQueries("Lankomumas");
  };
  return (
    <div>
      {status === "loading" ? (
        <Spinner size="sm" animation="border" role="status">
          <span className="sr-only">Kraunasi...</span>
        </Spinner>
      ) : status === "error" ? (
        <span>Error:</span>
      ) : (
        data.vaikoDuom.map((lankomumas,i) => {
          // console.log(lankomumas);
          return (
            <div key={i}>
            <h6  className="text-center">Ketv</h6>
              <BootstrapSwitchButton
                size="xs"
                id={lankomumas.userId}
                checked={lankomumas.Pirm_Ketvirtadienis}
                onlabel="O"
                offlabel="I"
                onstyle="outline-success"
                onChange={() =>
                    toggle(lankomumas.Pirm_Ketvirtadienis, lankomumas.userId)
                  }
              >
              </BootstrapSwitchButton>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Pirmo_VaikoLankomumoKetv;
