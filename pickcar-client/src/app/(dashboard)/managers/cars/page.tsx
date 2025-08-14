"use client";
import Card from "@/components/Card";
import Header from "@/components/ui/Header";
import Loading from "@/components/ui/Loading";
import {
  useGetAuthUserQuery,
  useGetManagerCarsQuery,
  useDeleteCarMutation,
} from "@/state/api";
import React, { useState } from "react";
import { toast } from "sonner";
// import { Toaster } from "@/components/ui/sonner";


const Cars = () => {
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);
  const { data: authUser } = useGetAuthUserQuery();
  
  const {
    data: managerCars,
    isLoading,
    error,
  } = useGetManagerCarsQuery(authUser?.cognitoInfo?.userId || "", 
    {skip: !authUser?.cognitoInfo?.userId,}
  );

  const [deleteCar] = useDeleteCarMutation();

  const handleDeleteCar = async (carId: number) => {
    if (deleteConfirmId === carId) {
      // User has already confirmed, proceed with deletion
      try {
        await deleteCar(carId).unwrap();
        toast.success("Car deleted successfully");
        setDeleteConfirmId(null);
      } catch (error: unknown) {
        toast.error((error as { data?: { message?: string } })?.data?.message || "Failed to delete car");
      }
    } else {
      // First click - show confirmation
      setDeleteConfirmId(carId);
      toast.info("Click delete again to confirm", {
        duration: 3000,
      });
      
      // Auto-clear confirmation after 3 seconds
      setTimeout(() => {
        setDeleteConfirmId(null);
      }, 3000);
    }
  };

  // const handleCancelDelete = () => {
  //   setDeleteConfirmId(null);
  // };

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="font-michroma font-bold">Error loading Manager Cars</div>
    );

  return (
    <div>
      <Header title="My Cars" subtitle="Browse and manage your Cars" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-5">
        {managerCars?.map((car) => (
          <Card
            key={car.id}
            car={car}
            isFavorite={false}
            onFavoriteToggle={() => {}}
            showFavoriteButton={false}
            carLink={`/managers/cars/${car.id}`}
            onDelete={handleDeleteCar}
            showDeleteButton={true}
          />
        ))}
      </div>
      {(!managerCars || managerCars.length === 0) && (
        <p className="font-semibold font-michroma text-primary-250 m-5">
          {" "}
          You don&apos;t have any listed Cars
        </p>
      )}
      
      {/* Confirmation toast for delete */}
      {/* {deleteConfirmId && (
        <div className="fixed bottom-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded transition ease-in-out duration-500">
          <p>Click delete again to confirm, or wait 3 seconds to cancel</p>
          <button 
            onClick={handleCancelDelete}
            className="text-yellow-800 underline ml-2"
          >
            Cancel
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Cars;
