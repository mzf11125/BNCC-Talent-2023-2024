import { InputForm } from "./inputform";
import { Card } from "@/components/ui/card";

const FormField = () => {
  return (
    <Card
      className="bg-slate-200 p-10 rounded-md"
      style={{ width: "50%", margin: "auto" }}
    >
      <div
        className="
            flex
            "
      >
        <InputForm />
      </div>
    </Card>
  );
};

export default FormField;
