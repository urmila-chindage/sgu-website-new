"use client";
import Link from "next/link";
import React from "react";
import NavSection from "../navigation/NavSection";
import { useTalimContext } from "@/context/TalimContext";

const HeaderLogoSection = () => {
 
  return (
    <div>
      <div className="container">
        <div className="row g-0 align-items-center">
          <div className="col-xl-2 col-lg-2">
            <div className="row align-items-center">
             
              <div className="d-lg-none d-flex justify-content-end col-6">
                <div className="col-lg-6">
                    <img src="" />
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default HeaderLogoSection;
