import Loading from "@/components/ui/Loading";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  useGetAuthUserQuery,
  useGetCarQuery,
  useGetPaymentsQuery,
  useGetReservationsQuery,
} from "@/state/api";
import { Car, Payment, Reservation } from "@/types/prismaTypes";
import { ArrowDownToLineIcon, Check, CreditCard, Download, FileText, Mail, MapPin } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";

const PaymentMethod = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 mt-10 md:mt-0 flex-1">
      <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
      <p className="mb-4">Change your payment Method</p>
      <div className="border rounded-lg p-6">
        <div className="">
          {/* card Info  */}
          <div className="flex gap-10">
            <div className="w-36 h-20 bg-blue-600 flex items-center justify-center rounded-md">
              <span className="text-white text-2xl font-bold">VISA</span>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-5">
                  <h3 className="text-lg font-semibold">Visa ending in 2024</h3>
                  <span className="text-sm font-medium border border-primary-700 text-primary-700 px-3 py-1 rounded-full">
                    Default
                  </span>
                </div>
                <div className="text-sm text-gray-500 flex items-center">
                  <CreditCard className="w-4 h-4 mr-1" />
                  <span>Expiry • 26/06/2024</span>
                </div>
              </div>
              <div className="text-sm text-gray-500 flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <span>billing@pickcar.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CarCard = ({
  car,
  currentReservation,
}: {
  car: Car;
  currentReservation: Reservation;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex-1 flex flex-col justify-between">
      {/* Header */}
      <div className="flex gap-5">
        <div className="w-64 h-32 object-cover bg-slate-500 rounded-xl"></div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="bg-green-500 w-fit text-white px-4 py-1 rounded-full text-sm font-semibold">
              Active Leases
            </div>

            <h2 className="text-2xl font-bold my-2">{car.name}</h2>
            <div className="flex items-center mb-2">
              <MapPin className="w-5 h-5 mr-1" />
              <span>
                {car.location.city}, {car.location.country}
              </span>
            </div>
          </div>
          <div className="text-xl font-bold">
            ${currentReservation.rent}{" "}
            <span className="text-gray-500 text-sm font-normal">/ night</span>
          </div>
        </div>
      </div>
      {/* Dates */}
      <div>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <div className="xl:flex">
            <div className="text-gray-500 mr-2">Start Date: </div>
            <div className="font-semibold">
              {new Date(currentReservation.startDate).toLocaleDateString()}
            </div>
          </div>
          <div className="border-[0.5px] border-primary-300 h-4" />
          <div className="xl:flex">
            <div className="text-gray-500 mr-2">End Date: </div>
            <div className="font-semibold">
              {new Date(currentReservation.endDate).toLocaleDateString()}
            </div>
          </div>
          <div className="border-[0.5px] border-primary-300 h-4" />
          <div className="xl:flex">
            <div className="text-gray-500 mr-2">Next Payment: </div>
            <div className="font-semibold">
              {new Date(currentReservation.endDate).toLocaleDateString()}
            </div>
          </div>
        </div>
        <hr className="my-4" />
      </div>
    </div>
  );
};

const BillingHistory = ({ payments }: { payments: Payment[] }) => {
  return (
    <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-1">Billing History</h2>
          <p className="text-sm text-gray-500">
            Download your previous plan receipts and usage details.
          </p>
        </div>
        <div>
          <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50">
            <Download className="w-5 h-5 mr-2" />
            <span>Download All</span>
          </button>
        </div>
      </div>
      <hr className="mt-4 mb-1" />
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Billing Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id} className="h-16">
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Invoice #{payment.id} -{" "}
                    {new Date(payment.paymentDate).toLocaleString("default", {
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold border ${
                      payment.paymentStatus === "Paid"
                        ? "bg-green-100 text-green-800 border-green-300"
                        : "bg-yellow-100 text-yellow-800 border-yellow-300"
                    }`}
                  >
                    {payment.paymentStatus === "Paid" ? (
                      <Check className="w-4 h-4 inline-block mr-1" />
                    ) : null}
                    {payment.paymentStatus}
                  </span>
                </TableCell>
                <TableCell>
                  {new Date(payment.paymentDate).toLocaleDateString()}
                </TableCell>
                <TableCell>${payment.amountPaid.toFixed(2)}</TableCell>
                <TableCell>
                  <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center font-semibold hover:bg-primary-700 hover:text-primary-50">
                    <ArrowDownToLineIcon className="w-4 h-4 mr-1" />
                    Download
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const RentalCar = () => {
  const { id } = useParams();
  const { data: authUser } = useGetAuthUserQuery();
  const {
    data: car,
    isLoading: carLoading,
    error: carError,
  } = useGetCarQuery(Number(id));
  const { data: reservations, isLoading: reservationsLoading } =
    useGetReservationsQuery(parseInt(authUser?.cognitoInfo?.userId || "0"), {
      skip: !authUser?.cognitoInfo?.userId,
    });
  const { data: payments, isLoading: paymentsLoading } = useGetPaymentsQuery(
    reservations?.[0]?.id || 0,
    { skip: !reservations?.[0]?.id }
  );

  if (carLoading || reservationsLoading || paymentsLoading) return <Loading />;
  if (!car || carError) return <div> Error loading Car</div>;

  const currentReservation = reservations?.find(
    (reservation) => reservation.carId === car.id
  );

  return (
    <div className="dashboard-container">
      <div className="w-full mx-auto">
        <div className="md:flex gap-10">
          {currentReservation && (
            <CarCard car={car} currentReservation={currentReservation} />
          )}
          <PaymentMethod />
        </div>
        <BillingHistory payments={payments || []} />
      </div>
    </div>
  );
};

export default RentalCar;
