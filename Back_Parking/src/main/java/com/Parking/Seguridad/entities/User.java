package com.Parking.Seguridad.entities;

import jakarta.persistence.*;
import lombok.*;

import javax.validation.constraints.NotBlank;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @NotBlank
    @Column(unique = true,nullable = false)
    private String userName;

    @NotBlank
    @Column(nullable = false)
    private String password;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "role_id" , nullable = false)
    private Role role;

    public User(String userName, String password, Role role)
    {
        this.userName = userName;
        this.password = password;
        this.role = role;
    }

}
