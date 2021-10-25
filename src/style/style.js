import React from "react";
import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  overflow: hidden;
  padding: 20px 27px;
  margin: 50px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgb(0 0 0 / 11%), 0 0px 40px rgb(116 75 106 / 2%);
  border-radius: 17px;
`;
export const Details = styled.p`
  padding: 0 20px;
  text-align: justify;
`;
export const Img = styled.img`
  width: 300px;
  
`;
