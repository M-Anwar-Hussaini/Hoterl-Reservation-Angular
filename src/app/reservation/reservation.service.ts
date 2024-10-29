import { Injectable, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ReservationService implements OnInit {
  private reservations: Reservation[] = [];

  ngOnInit(): void {
    this.reservations = JSON.parse(
      localStorage.getItem('reservations') || '[]'
    );
  }

  getAllReservations(): Reservation[] {
    return this.reservations;
  }

  getSingleReservation(id: string): Reservation | undefined {
    return this.reservations.find((r) => r.id === id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    this.reservations = this.reservations.filter((r) => r.id !== id);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(reservation: Reservation): void {
    const index = this.reservations.findIndex((r) => r.id === reservation.id);
    this.reservations[index] = reservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
