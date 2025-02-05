import React, { Suspense } from 'react';
import KaKaoMap from './Map';
import DummyIndex from './DummyIndex';
import Phone from '/icons/phone.svg';
import Position from '/icons/position.svg';
import WishlistButton from './WishlistButton';

const Placeholder = () => (
  <div className="max-w-962 mx-auto p-4 mb-100 opacity-0">
    <div className="mb-10 text-m text-gray-7 h-6 w-1/3 bg-gray-200"></div>
    <div className="relative rounded-lg overflow-hidden shadow-md mb-30 h-[400px] bg-gray-200"></div>
    <section>
      <div className="flex items-center justify-between mt-11">
        <h2 className="text-2xl font-bold text-neutral-800 h-6 w-1/4 bg-gray-200"></h2>
      </div>
      <div className="p-20">
        <p className="text-lg font-bold text-neutral-800 mt-6 h-6 w-3/4 bg-gray-200"></p>
      </div>
    </section>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-neutral-800 mb-20 h-6 w-1/3 bg-gray-200"></h2>
        <div className="w-full h-[215px] mt-10 bg-gray-200"></div>
      </div>
      <div className="space-y-4 mt-30">
        <ul className="space-y-12 h-[215px] p-20">
          <li className="mb-30 flex item-center gap-4 h-10 bg-gray-200"></li>
          <li className="flex item-center gap-4 h-10 bg-gray-200"></li>
        </ul>
      </div>
    </div>
  </div>
);

const DetailContent = ({ data }) => {
  if (!data) return <Placeholder />;

  return (

    <div className="font-sans max-w-963 mx-auto p-4 mb-80">
      <div className="mt-30 mb-20 text-[14px] text-gray-7">
        {data.region1cd?.label || "제주"}
        <span className="text-[11px] text-gray-7">{"  "}&gt;{"  "}</span>
        <span className="text-[18px] text-gray-10">
          {data.region2cd?.label || "제주시"}
        </span>

      </div>
      <div className="flex justify-center">
        <div 
          className="relative rounded-15 overflow-hidden shadow-md mb-30 w-[963px]"
          style={{
            boxShadow:
              '-54px 119px 37px 0 rgba(0,0,0,0), -35px 76px 33px 0 rgba(0,0,0,0.01), -19px 43px 28px 0 rgba(0,0,0,0.05), -9px 19px 21px 0 rgba(0,0,0,0.09), -2px 5px 11px 0 rgba(0,0,0,0.1)',
          }}>
          <img
            src={data.repPhoto.photoid.imgpath}
            alt={data.repPhoto.descseo}
            className="w-full h-[270px] object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(75,198,222,0.72) -0.93%, rgba(102,102,102,0) 100%)",
            }}
          ></div>
          <div className="absolute inset-0 flex items-end justify-start p-22">
            <h1 className="text-4xl font-bold text-white">{data.title}</h1>
          </div>

        </div>
      </div>
      <section>
        <div className="flex items-center justify-between mt-11">
            <h2 className="text-30 font-bold text-neutral-800 flex items-center align-middle leading-none pt-30">🔎 Info</h2>
            <div className="flex items-center h-full">
              <WishlistButton placeInfo={data} />
            </div>
        </div>

        <div className="p-20 grid grid-cols-[1fr,0.43fr] gap-x-6">
          <div>
            <p className="text-lg font-bold text-neutral-800 mt-6">
              {data.introduction || "천혜의 자연과 감성 여행지 🌿🏝️"}
            </p>
            <DummyIndex />
          </div>
          <div></div>
        </div>
      </section>
      <div className="flex items-center w-963 h-2 border-t-2 bg-gray-3 mt-10 mb-30"></div>
      <h2 className="text-30 font-bold text-neutral-800 mb-20 flex items-center align-middle leading-none">📍 About</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="space-y-4">
          <div className="w-full h-[215px] mt-10 lg:w-3500 lg:overflow-x-hidden ">
            <KaKaoMap
              latitude={data?.latitude || 33.4896}
              longitude={data?.longitude || 126.5006}
            />
          </div>
        </div>

        <div className="grid grid-cols-[0.5fr,1fr] gap-x-3 gap-y-3 p-10 items-center ml-10">
          <div className="flex items-center gap-4">
            <img src={Position} alt="position" className="w-20 h-20 mr-8" />
            <p className="text-[17px] font-bold text-[#8c8c8c]">주소</p>
          </div>
          <p className="text-[14px] text-[#434343] leading-6">{data.roadaddress || "제주특별자치도 제주시 문연로 6"}</p>
          <div className="flex items-center gap-4">
            <img src={Phone} alt="phone" className="w-20 h-20 mr-8" />
            <p className="text-[17px] font-bold text-[#8c8c8c]">전화번호</p>
          </div>
          <p className="text-[14px] text-[#434343] leading-6">{data.phoneno || "064-120"}</p>

        </div>
      </div>
    </div>
  );
};

const Detail = ({ data }) => {
  return (
    <Suspense fallback={<Placeholder />}>
      <DetailContent data={data} />
    </Suspense>
  );
};

export default Detail;
