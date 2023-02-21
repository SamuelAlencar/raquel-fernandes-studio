import React from "react";

const services = [
  {
    name: "Depilação com cera",
    descricao:
      "Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la impremta. Lorem Ipsum ha estat el text estàndard de la indústria des de l'any 1500",
    urlImage:
      "https://images.pexels.com/photos/7020255/pexels-photo-7020255.jpeg?auto=compress&cs=tinysrgb&w=600",
    precoDe: "R$123,00",
    precoPor: "R$123,00",
    callToAction: "saiba mais",
  },
  {
    name: "Maquiagem e dia da noiva",
    descricao: "Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la impremta. Lorem Ipsum ha estat el text estàndard de la indústria des de l'any 1500",
    urlImage:
      "https://images.pexels.com/photos/7020255/pexels-photo-7020255.jpeg?auto=compress&cs=tinysrgb&w=600",
    precoDe: "R$123,00",
    precoPor: "R$123,00",
    callToAction: "saiba mais",
  },
  {
    name: "Estética corporal",
    descricao: "Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la impremta. Lorem Ipsum ha estat el text estàndard de la indústria des de l'any 1500",
    urlImage:
      "https://images.pexels.com/photos/7020255/pexels-photo-7020255.jpeg?auto=compress&cs=tinysrgb&w=600",
    precoDe: "R$123,00",
    precoPor: "R$123,00",
    callToAction: "saiba mais",
  },
  {
    name: "Esfoliação facial e corporal",
    descricao: "Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la impremta. Lorem Ipsum ha estat el text estàndard de la indústria des de l'any 1500",
    urlImage:
      "https://images.pexels.com/photos/7020255/pexels-photo-7020255.jpeg?auto=compress&cs=tinysrgb&w=600",
    precoDe: "R$123,00",
    precoPor: "R$123,00",
    callToAction: "saiba mais",
  },
  {
    name: "Penteados com baby liss",
    descricao: "Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la impremta. Lorem Ipsum ha estat el text estàndard de la indústria des de l'any 1500",
    urlImage:
      "https://images.pexels.com/photos/7020255/pexels-photo-7020255.jpeg?auto=compress&cs=tinysrgb&w=600",
    precoDe: "R$123,00",
    precoPor: "R$123,00",
    callToAction: "saiba mais",
  },
  {
    name: "Depilação com cera",
    descricao: "Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la impremta. Lorem Ipsum ha estat el text estàndard de la indústria des de l'any 1500",
    urlImage:
      "https://images.pexels.com/photos/7020255/pexels-photo-7020255.jpeg?auto=compress&cs=tinysrgb&w=600",
    precoDe: "R$123,00",
    precoPor: "R$123,00",
    callToAction: "saiba mais",
  },
  {
    name: "Depilação com cera",
    descricao: "Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la impremta. Lorem Ipsum ha estat el text estàndard de la indústria des de l'any 1500",
    urlImage:
      "https://images.pexels.com/photos/7020255/pexels-photo-7020255.jpeg?auto=compress&cs=tinysrgb&w=600",
    precoDe: "R$123,00",
    precoPor: "R$123,00",
    callToAction: "saiba mais",
  },

];

export default function Services() {
  return (
    <>
      <div className="container text-center">
        <h3 className="text-3xl font-semibold tracking-tight text-rose-600 py-4">Serviços</h3>
      </div>
      <div className="container mx-auto flex flex-wrap">
        {services.map((service, key) => (
          <div className="md:w-1/2 lg:w-1/3  p-4  ">
          <div className="p-4 shadow bg-rose-100 flex align-middle text-center flex-col">
            <img
              className="rounded-full"
              src={service.urlImage}
              alt={service.name}
              key={key}
            />
            <div className="p-4">
              <p className="text-2xl font-semibold tracking-tight text-rose-600 py-4">
                {service.name}
              </p>
              <p className="mb-2 leading-normal">{service.descricao}</p>
              <hr className="my-5 bg-rose-300 h-0.5" ></hr>
              <div className="py-4">
                <span className="text-base font-medium text-rose-600">a partir de </span><span className="text-xl text-rose-600 font-bold tracking-widest">{service.precoDe}</span>
              </div>
              <button className="px-4 py-2 text-sm text-rose-100 bg-rose-500 rounded shadow">
                {service.callToAction}
              </button>

            </div>
          </div>
          </div>
        ))}
      </div>
    </>
  );
}
