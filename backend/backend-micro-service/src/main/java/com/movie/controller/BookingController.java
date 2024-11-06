package com.movie.controller;

import com.movie.entity.Booking;
import com.movie.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @PostMapping
    public Booking bookTickets(@RequestBody Booking booking) {
        return bookingService.bookTickets(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllMovies();
    }

    @PutMapping("/{id}")
    public Booking updateBooking(@PathVariable Long id, @RequestBody Booking movie) {
        movie.setId(id);
        return bookingService.updateBooking(movie);
    }

    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
    }
}