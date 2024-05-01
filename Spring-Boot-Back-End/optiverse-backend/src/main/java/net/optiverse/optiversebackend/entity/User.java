package net.optiverse.optiversebackend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long u_id;

    @Column(name = "u_email", nullable = false, unique = true)
    private String u_email;

    @Column(name = "u_pass")
    private String u_pass;

    @Column(name = "u_expired")
    private Boolean u_expired;

    @Column(name = "u_uname")
    private String u_uname;

    @Column(name = "u_date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate u_date;

}