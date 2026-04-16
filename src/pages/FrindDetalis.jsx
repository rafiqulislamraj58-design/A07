import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RiAlarmWarningFill } from "react-icons/ri";
import { FaArchive, FaPlay } from "react-icons/fa";
import { MdDelete, MdCall, MdMessage } from "react-icons/md";
import Relation from "../Componats/Relation";
import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";

const FrindDetalis = () => {
  const { id } = useParams();
  const { addEvent } = useContext(TimelineContext);
  const [frind, setfrind] = useState(null);


  const handelClik = () => {
  addEvent({
    type: "call",
    name: frind.name,
    time: new Date().toLocaleString(),
  });

  if (frind?.phone) window.location.href = `tel:${frind.phone}`;
};

const handelMassage = () => {
  addEvent({
    type: "message",
    name: frind.name,
    time: new Date().toLocaleString(),
  });
};

const handelplay = () => {
  addEvent({
    type: "video",
    name: frind.name,
    time: new Date().toLocaleString(),
  });
};
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setfrind(found);
      });
  }, [id]);
  if (!frind) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mx-auto grid grid-cols-2 gap-4">
      <div>
        <div className="shadow w-full mt-3.5 ">
          <div className="flex justify-center `">
            <img
              src={frind.picture}
              className="rounded-full mt-2.5"
              alt="Person"
            />
          </div>
          <h3 className="text-center font-bold">{frind.name}</h3>
          <div className=" flex justify-center items-center gap-2.5">
            {frind.tags.map((tag, index) => {
              return (
                <button
                  className="btn  bg-green-500/50 text-[#244d3f] px-5 py-2 rounded-full "
                  key={index}
                >
                  {tag}
                </button>
              );
            })}
          </div>
          <div className="flex justify-center items-center mt-2.5 mb-2">
            <button
              className={`btn btn-sm w-32 mb-1.5 rounded-full  ${frind.status === "almost due" ? "btn-warning px-3" : frind.status === "overdue" ? "btn-error px-3" : "btn-success px-3"}`}
            >
              {frind.status}
            </button>
          </div>

          <p className="text-center text-sm mb-1">{frind.bio}</p>
          <p className="text-center text-sm mb-3">{frind.email}</p>
        </div>

        <div className="w-full shadow text-center flex justify-center items-center gap-2 py-2.5">
          <RiAlarmWarningFill /> Snooze 2 weeks
        </div>
        <div className="w-full shadow text-center flex justify-center items-center gap-2 py-2.5">
          <FaArchive /> Archive
        </div>
        <div className="w-full shadow text-red-500 font-bold text-center flex justify-center items-center gap-2 py-2.5 mb-1.5">
          <MdDelete /> Delete
        </div>
      </div>
      <div>
        <div className="flex flex-row gap-4 ">
          <div className="w-full h-32 shadow  mt-3.5">
            <h1 className="text-center font-bold p-5 text-[#244d3f]">
              {frind.days_since_contact}
            </h1>
            <p className="text-center">days since contact</p>
          </div>
          <div className="w-full h-32 shadow  mt-3.5">
            <h1 className="text-center font-bold p-5 text-[#244d3f]">
              {frind.goal}
            </h1>
            <p className="text-center">goal (30day) </p>
          </div>
          <div className="w-full h-32 shadow  mt-3.5">
            <h1 className="text-center font-bold p-5 text-[#244d3f]">
              {frind.next_due_date}
            </h1>
            <p className="text-center">Next due</p>
          </div>
        </div>
        <div className="mt-2.5">
          <Relation />
        </div>
        <div className="p-6 grid grid-cols-3 gap-2 shadow mt-3.5">
          <button
            onClick={handelClik}
            className="btn w-full h-32 shadow  mt-3.5 "
          >
            <MdCall />
            <p className="text-center font-bold">call</p>
          </button>
          <button
            onClick={handelMassage}
            className="btn w-full h-32 shadow  mt-3.5"
          >
            <MdMessage />
            <p className="text-center font-bold">Message </p>
          </button>
          <button
            onClick={handelplay}
            className="btn w-full h-32 shadow  mt-3.5"
          >
            <FaPlay />

            <p className="text-center font-bold">vedio</p>
          </button>
        </div>
       
      </div>

      <div></div>
    </div>
  );
};

export default FrindDetalis;
