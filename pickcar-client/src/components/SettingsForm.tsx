import React,{ useState } from "react";
import { SettingsFormData, settingsSchema } from "@/lib/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import { CustomFormField } from "./FormField";
import { Button } from "./ui/button";

const SettingsForm = ({
  initialData,
  onSubmit,
  userType,
}: SettingsFormProps) => {
  const [editMode, setEditMode] = useState(false);
  const form = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    defaultValues: initialData,
  });
  const  toggleEditMode = () => {
    setEditMode(!editMode);
    if (editMode) {
      form.reset(initialData);
    }
  };
  const handleSubmit = async (data: SettingsFormData) => {
    await onSubmit(data);
    setEditMode(false);
  };
  return (
    <div className="pt-8 pb-5 px-8 m-auto w-lvw">
      <div className="mb-5 md:w-1/3  md:m-auto mx-3 min h-1/3 py-10">
        <h1 className="text-xl font-semibold font-michroma tracking-wider">
          {`${userType === "manager" ? "Manager" : "Renter"} Settings`}

          {/* {`${userType.charAt(0).toUpperCase() + userType.slice(1)} Settings`} same thing with complex logic  */}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your personal information and preferences here.
        </p>
      </div>
      <div className="bg-white rounded-xl p-6 md:w-1/3 shadow-md md:m-auto mx-3 min h-1/3">
        {/* we will use an reuseable components from components/FormField its a file can make forms easy to use and maintain a good types definitions and state management  */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <CustomFormField
              name="name"
              label="Name"
              disabled={!editMode}
              placeholder="Enter your name"
            />
            <CustomFormField
              name="email"
              label="Email"
              disabled={!editMode}
              placeholder="Enter your Email"
              type="email"
            />
            <CustomFormField
              name="phoneNumber"
              label="Phone Number"
              disabled={!editMode}
              placeholder="Enter your phone Number"
              // type="number"
            />
            <div className="pt-4 flex justify-between">
              <Button
                type="button"
                onClick={toggleEditMode}
                className="bg-primary-700 text-white hover:bg-secondary-500 font-michroma tracking-wider cursor-pointer"
              >
                {editMode ? "Cancel" : "Edit"}
              </Button>
              {editMode && (
                <Button
                  type="submit"
                  // onClick={toggleEditMode}
                  className="bg-primary-250 text-white hover:bg-primary-800 font-michroma tracking-wider"
                >
                  save changes
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SettingsForm;
