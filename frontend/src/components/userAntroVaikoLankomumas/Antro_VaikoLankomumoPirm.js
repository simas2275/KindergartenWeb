import React from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import useUpdateAntroPirmd from "../../hooks/antroVaikoLankomumoHooks/2VaikoPirmd";
import useGetVaikoLankomuma from "../../hooks/pirmoVaikoLankomumoHooks/getVaikoLankomuma";
import { Card, Form, Col, Row, Spinner } from "react-bootstrap";
import { useQuery, useQueryClient } from "react-query";
const Antro_VaikoLankomumoPirm = () => {
  const { status, data, isFetching, error } = useGetVaikoLankomuma();
  //   console.log(data)
  const { mutate } = useUpdateAntroPirmd();
  const queryClient = useQueryClient();

  const toggle = async (Antr_Pirmadienis, userId) => {
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
            <h6  className="text-center">Pirm</h6>
              <BootstrapSwitchButton
                size="xs"
                id={lankomumas.userId}
                checked={lankomumas.Antr_Pirmadienis}
                onlabel="O"
                offlabel="I"
                onstyle="outline-success"
                onChange={() =>
                    toggle(lankomumas.Antr_Pirmadienis, lankomumas.userId)
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

export default Antro_VaikoLankomumoPirm;
