import { useContext ,useState } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { MdCall, MdMessage } from "react-icons/md";
import { FaVideo } from "react-icons/fa";

const Timeline = () => {
  const { timeline } = useContext(TimelineContext);
  const [filter, setfilter] = useState("");

  const filteredTimeline = filter
  ? timeline.filter((item) => item.type === filter)
  : timeline;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Timeline</h1>
      <div className="mb-4">
      <select
      value={filter}
      onChange={(e)=>setfilter(e.target.value)}
      className="select select-borderd w-96">
      <option value="">Filter timeline</option>
      <option value="call">Call</option>
      <option value="message">Message</option>
      <option value="video">Video</option>
      </select>

      </div>

      <div className="space-y-4">
        {timeline.length === 0 ? (
          <p>No activity yet</p>
        ) : (
          filteredTimeline.map((item, index) => {
            let icon;
            let title;

            if (item.type === "call") {
              icon = <MdCall />;
              title = `Call with ${item.name}`;
            } else if (item.type === "message") {
              icon = <MdMessage />;
              title = `Text with ${item.name}`;
            } else {
              icon = <FaVideo />;
              title = `Video with ${item.name}`;
            }
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-3 border rounded-lg shadow"
              >
                <div className="text-xl">{icon}</div>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Timeline;